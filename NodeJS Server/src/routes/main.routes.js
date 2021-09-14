import express from 'express'
import ChildProcess, { spawn } from 'child_process'

const router = express.Router()

function runPythonScript(filePath, type, command) {
    return new Promise((resolve, reject) => {
        ChildProcess.spawn(
            'python',
            [filePath, type, command],
            [],
            (err, stdout, stderr) => {
                if (err) {
                    console.log(
                        `Exec: Fail to run python script: ${type} ${command}`
                    )
                    console.log(err)
                    console.log(stderr)
                    return reject(err)
                }

                return resolve(stdout)
            }
        )
    })
}

function runPythonScript2(filePath, type, command1, command2) {
    return new Promise((resolve, reject) => {
        ChildProcess.spawn(
            'python',
            [filePath, type, command1, command2],
            [],
            (err, stdout, stderr) => {
                if (err) {
                    console.log(
                        `Exec: Fail to run python script: ${type} ${command}`
                    )
                    console.log(err)
                    console.log(stderr)
                    return reject(err)
                }

                return resolve(stdout)
            }
        )
    })
}

function execCommand(command) {
    return new Promise((resolve, reject) => {
        ChildProcess.exec(command, (err, stdout, stderr) => {
            if (err) {
                console.log(`Exec: Fail to execute command ${command}`)
                console.log(err)
                console.log(stderr)
                return reject(err)
            }

            return resolve(stdout)
        })
    })
}

router.get('/', async (req, res) => {
    res.json({ message: 'Connected' })
})

router.post('/python', async (req, res) => {
    const filePath =
        'C:/Users/Gabriel Torres/Desktop/Pessoal/Projetos/Projeto App Controle Remoto/Python Program/spawnScript.py'
    const { type, command } = req.body

    try {
        runPythonScript(filePath, type, command)
        console.log('Connected')
        console.log(type, command)
        res.json({ message: 'Command received' })
    } catch (err) {
        res.json({ error: true, message: err.message })
    }
})

router.post('/python2', async (req, res) => {
    const filePath =
        'C:/Users/Gabriel Torres/Desktop/Pessoal/Projetos/Projeto App Controle Remoto/Python Program/spawnScript.py'
    const { type, command1, command2 } = req.body

    try {
        runPythonScript2(filePath, type, command1, command2)
        console.log('Connected')
        console.log(type, command1, command2)
        res.json({ message: 'Command received' })
    } catch (err) {
        res.json({ error: true, message: err.message })
    }
})

router.post('/command', async (req, res) => {
    const { command } = req.body
    // const command = 'start chrome www.google.com'
    try {
        execCommand(command)
        console.log('Connected')
        res.json({ message: 'Command received' })
    } catch (err) {
        res.json({ error: true, message: err.message })
    }
})

export default router
