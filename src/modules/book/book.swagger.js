/**
 * @swagger
 * tags:
 *  name: Book
 *  description: Book Modules And Routes
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          createBook:
 *              type: object
 *              required:
 *                  -   title
 *                  -   price
 *                  -   description
 *              properties:
 *                  title:
 *                      type: string
 *                  price:
 *                      type: string
 *                  description:
 *                      type: string
 *
 */

/**
 * @swagger
 *
 * /book/create-book:
 *  post:
 *      summary: Create Book
 *      tags:
 *          -   Book
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: "#/components/schemas/createBook"
 *      responses:
 *          200:
 *              description: success
 *
 */

/**
 * @swagger
 *
 * /book/books:
 *  get:
 *      summary: Get All Books
 *      tags:
 *          -   Book
 *      responses:
 *          200:
 *              description: success
 *
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          updateBook:
 *              type: object
 *              required:
 *                  -   title
 *                  -   price
 *                  -   description
 *              properties:
 *                  title:
 *                      type: string
 *                  price:
 *                      type: string
 *                  description:
 *                      type: string
 *
 */

/**
 * @swagger
 *
 * /book/update-book:
 *  patch:
 *      summary: Update Book
 *      tags:
 *          -   Book
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: "#/components/schemas/updateBook"
 *      responses:
 *          200:
 *              description: success
 *
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          deleteBook:
 *              type: object
 *              required:
 *                  -   id
 *              properties:
 *                  id:
 *                      type: string
 *
 */

/**
 * @swagger
 *
 * /book/delete-book:
 *  delete:
 *      summary: Delete Book
 *      tags:
 *          -   Book
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: "#/components/schemas/deleteBook"
 *      responses:
 *          200:
 *              description: success
 *
 */

