class TeacherController {

    static display = async (req, res) => {
        try {
            res.render('teacher/display')
        }
        catch (error) {
            console.log(error)
        }
    }

    static create = async (req, res) => {
        try {
            res.render('teacher/create')
        }
        catch (error) {
            console.log(error)
        }
    }

}

module.exports = TeacherController