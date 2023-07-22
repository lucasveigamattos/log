import createLogger from "../src/main"

describe("Testing library with typescript", () => {
    test("Testing logger configs", () => {
        let logger = createLogger({level: "CRITICAL", filePath: "./logs/log.log"})
        expect(logger.levelWeight).toBe(5)

        logger = createLogger({level: "ERROR", filePath: "./logs/log.log"})
        expect(logger.levelWeight).toBe(4)

        logger = createLogger({level: "WARNING", filePath: "./logs/log.log"})
        expect(logger.levelWeight).toBe(3)

        logger = createLogger({level: "INFO", filePath: "./logs/log.log"})
        expect(logger.levelWeight).toBe(2)

        logger = createLogger({level: "DEBUG", filePath: "./logs/log.log"})
        expect(logger.levelWeight).toBe(1)

        logger = createLogger({level: "NOTSET", filePath: "./logs/log.log"})
        expect(logger.levelWeight).toBe(0)
    })
})