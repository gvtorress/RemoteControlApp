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
                    logger.debug(
                        `Exec: Fail to run python script: ${type} ${command}`
                    )
                    logger.debug(err)
                    logger.debug(stderr)
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
                logger.debug(`Exec: Fail to execute command ${command}`)
                logger.debug(err)
                logger.debug(stderr)
                return reject(err)
            }

            return resolve(stdout)
        })
    })
}

router.get('/python', async (req, res) => {
    const filePath =
        'C:/Users/Gabriel Torres/Desktop/Pessoal/Projetos/Projeto App Controle Remoto/Python Program/spawnScript.py'
    const { type, command } = req.body

    try {
        runPythonScript(filePath, type, command)
        console.log('Connected')
        res.json({ message: 'Command sent' })
    } catch (err) {
        res.json({ error: true, message: err.message })
    }
})

router.get('/command', async (req, res) => {
    const { command } = req.body
    // const command = 'start chrome www.google.com'
    try {
        execCommand(command)
        console.log('Connected')
        res.json({ message: 'Command sent' })
    } catch (err) {
        res.json({ error: true, message: err.message })
    }
})

export default router
