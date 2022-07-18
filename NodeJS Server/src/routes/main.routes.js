import express from 'express'
import ChildProcess from 'child_process'

const router = express.Router()

function runPythonScript(filePath, type, command) {
    ChildProcess.spawn('python', [filePath, type, command])
}

function runPythonScript2(filePath, type, command1, command2) {
    ChildProcess.spawn('python', [filePath, type, command1, command2])
}

function execCommand(command) {
    ChildProcess.exec(command)
}

router.get('/', async (req, res) => {
    execCommand('dir')
    res.json({ message: 'Connected' })
})

router.post('/python', async (req, res) => {
    const filePath =
        'C:/Users/Gabriel Torres/Desktop/Pessoal/Projetos/Projeto App Controle Remoto/Python Program/spawnScript.py'
    const { type, command } = req.body

    try {
        runPythonScript(filePath, type, command)
        res.json({ message: 'Command received' })
    } catch (err) {
        console.log(err.message)
        res.json({ error: true, message: err.message })
    }
})

router.post('/python2', async (req, res) => {
    const filePath =
        'C:/Users/Gabriel Torres/Desktop/Pessoal/Projetos/Projeto App Controle Remoto/Python Program/spawnScript.py'
    const { type, command1, command2 } = req.body

    try {
        runPythonScript2(filePath, type, command1, command2)
        res.json({ message: 'Command received' })
    } catch (err) {
        console.log(err.message)
        res.json({ error: true, message: err.message })
    }
})

router.post('/command', async (req, res) => {
    const { command } = req.body
    try {
        execCommand(command)
        res.json({ message: 'Command received' })
    } catch (err) {
        console.log(err.message)
        res.json({ error: true, message: err.message })
    }
})

export default router
