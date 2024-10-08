export const validate = (input) => async(req, res, next) => {
    try {
        const parseBody = await input.parseAsync(req.body)
        req.body = parseBody
        next()
    } catch (error) {
        const message = error.errors[0].message
        console.log(message);
        res.status(400).json({ message: message })
    }
}