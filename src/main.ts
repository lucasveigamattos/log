function createLogger(configs: configs) {
    const levelsWeight = {
        CRITICAL: 5,
        ERROR: 4,
        WARNING: 3,
        INFO: 2,
        DEBUG: 1,
        NOTSET: 0
    }
    let levelWeight = levelsWeight[configs.level]

    console.log(`Logger current level: ${configs.level}`)
    console.log(`Logger current level weight: ${levelsWeight[configs.level]}`)
    console.log(`Logger current output file: ${configs.filePath}`)

    return {
        levelWeight
    }
}

export default createLogger