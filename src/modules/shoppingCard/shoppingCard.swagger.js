/**
 * @swagger
 * tags:
 *  name: User
 *  description: User Modules And Routes
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          registerUser:
 *              type: object
 *              required:
 *                  -   fullName
 *                  -   email
 *                  -   password
 *              properties:
 *                  fullName:
 *                      type: string
 *                  email:
 *                      type: string
 *                  password:
 *                      type: string
 *
 */

/**
 * @swagger
 *
 * /user/sign-up:
 *  post:
 *      summary: Register User
 *      tags:
 *          -   User
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: "#/components/schemas/registerUser"
 *      responses:
 *          200:
 *              description: success
 *
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          loginUser:
 *              type: object
 *              required:
 *                  -   email
 *                  -   password
 *              properties:
 *                  email:
 *                      type: string
 *                  password:
 *                      type: string
 *
 */

/**
 * @swagger
 *
 * /user/sign-in:
 *  post:
 *      summary: Login User
 *      tags:
 *          -   User
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: "#/components/schemas/loginUser"
 *      responses:
 *          200:
 *              description: success
 *
 */

/**
 * @swagger
 *
 * /user/users:
 *  get:
 *      summary: Get All Users
 *      tags:
 *          -   User
 *      responses:
 *          200:
 *              description: success
 *
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          updateUser:
 *              type: object
 *              required:
 *                  -   id
 *                  -   fullName
 *                  -    email
 *              properties:
 *                  id:
 *                      type: string
 *                  fullName:
 *                      type: string
 *                  email:
 *                      type: string
 *
 */

/**
 * @swagger
 *
 * /user/update:
 *  patch:
 *      summary: Update User
 *      tags:
 *          -   User
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: "#/components/schemas/updateUser"
 *      responses:
 *          200:
 *              description: success
 *
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          deleteUser:
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
 * /user/delete-one:
 *  delete:
 *      summary: Delete User
 *      tags:
 *          -   User
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: "#/components/schemas/deleteUser"
 *      responses:
 *          200:
 *              description: success
 *
 */
