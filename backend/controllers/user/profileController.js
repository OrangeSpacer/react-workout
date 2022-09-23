export const getUserProfile = (req,res) => {
    const user = {
        name:'Max',
        age: 21
    }
    res.json(user)
}