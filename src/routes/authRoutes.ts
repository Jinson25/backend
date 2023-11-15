// routes/auth.routes.ts
import { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User, Role } from '../models/models.index';
import asyncHandler from 'express-async-handler';

const router = Router();

/*const rolesBase = async () => {
    const roles = ['administrador', 'cliente', 'author'];

    for (const roleName of roles) {
        const existingRole = await Role.findOne({ where: { name: roleName } });

        if (!existingRole) {
            await Role.create({ name: roleName });
        }
    }
};

rolesBase();*/

router.post(
    '/login',
    asyncHandler(async (req, res) => {
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username } });

        if (user && (await bcrypt.compare(password, user.password))) {
            res.send(generateTokenResponse(user));
        } else {
            res.status(400).send('El usuario o la contraseña no son válidos');
        }
    })
);

router.post(
    '/register',
    asyncHandler(async (req, res) => {
        const {username, password, roleName} = req.body;
        const role = await Role.findOne({where: {name: roleName}})

        if (!role) {
            const newRole = await Role.create({ name: roleName });
            const newUser = await User.create({ username, password, RoleId: newRole.id } as any);
            res.send(generateTokenResponse(newUser));
        } else {
            const newUser = await User.create({ username, password, RoleId: role.id } as any);
            res.send(generateTokenResponse(newUser));
        }
    })
);

const generateTokenResponse = (user: any) => {
    const token = jwt.sign(
        {
            id: user.id,
            username: user.username,
            RoleId: user.RoleId,
        },
        process.env.JWT_SECRET!,
        {
            expiresIn: '2d',
        }
    );
    return {
        id: user.id,
        username: user.username,
        RoleId: user.RoleId,
        token,
    };
};

export default router;