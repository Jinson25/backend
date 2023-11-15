import { Router, Request, Response } from "express";
import Book from '../models/bookModel'
import asyncHandler from 'express-async-handler';

const router = Router();

//Obtener 
router.get('/', asyncHandler(async (req, res) => {
    const books = await Book.findAll();
    res.json(books)
}))

router.get('/:id', asyncHandler(async (req, res) => {
    const bookId = req.params.id;
    const book = await Book.findByPk(bookId);

    if (book) {
        res.json(book);
    } else {
        res.status(404).send('Libro no encontrado');
    }
}));

router.post('/', asyncHandler(async (req, res) => {
    const { title, author, genre } = req.body;
    const newBook = await Book.create({ title, author, genre });
    res.status(201).json(newBook);
}));

// Actualizar un libro por ID
router.put('/:id', asyncHandler(async (req, res) => {
    const bookId = req.params.id;
    const { title, author, genre } = req.body;
    const book = await Book.findByPk(bookId);

    if (book) {
        await book.update({ title, author, genre });
        res.json(book);
    } else {
        res.status(404).send('Libro no encontrado');
    }
}));

// Eliminar un libro por ID
router.delete('/:id', asyncHandler(async (req, res) => {
    const bookId = req.params.id;
    const book = await Book.findByPk(bookId);

    if (book) {
        await book.destroy();
        res.send('Libro eliminado correctamente');
    } else {
        res.status(404).send('Libro no encontrado');
    }
}));

export default router;