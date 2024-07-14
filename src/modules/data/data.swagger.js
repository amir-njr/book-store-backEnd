/**
 * @swagger
 * tags:
 *  name: Peyment Data
 *  description: Peyment Data Modules And Routes
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          giveData:
 *              type: object
 *              required:
 *                  -   totalPrice
 *                  -   bought
 *                  -   productionCount
 *                  -   userId
 *              properties:
 *                  totalPrice:
 *                      type: string
 *                  bought:
 *                      type: string
 *                  productionCount:
 *                      type: string
 *                  userId:
 *                      type: string
 *
 */

/**
 * @swagger
 *
 * /data/give-data:
 *  post:
 *      summary: Give Peyment Data
 *      tags:
 *          -   Peyment Data
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: "#/components/schemas/giveData"
 *      responses:
 *          200:
 *              description: success
 *
 */