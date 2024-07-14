/**
 * @swagger
 * tags:
 *  name: Card Nummer
 *  description: Card Modules And Routes
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          isShoppingCard:
 *              type: object
 *              required:
 *                  -   cardNumber
 *              properties:
 *                  cardNumber:
 *                      type: string
 *
 */

/**
 * @swagger
 *
 * /card/is-card:
 *  post:
 *      summary: Is Card Number In DB ????
 *      tags:
 *          -   Card Nummer
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: "#/components/schemas/isShoppingCard"
 *      responses:
 *          200:
 *              description: success
 *
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          createShoppingCard:
 *              type: object
 *              required:
 *                  -   cardNumber
 *              properties:
 *                  cardNumber:
 *                      type: string
 *
 */

/**
 * @swagger
 *
 * /card/create:
 *  post:
 *      summary: Create Card Number In DB
 *      tags:
 *          -   Card Nummer
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: "#/components/schemas/createShoppingCard"
 *      responses:
 *          200:
 *              description: success
 *
 */
