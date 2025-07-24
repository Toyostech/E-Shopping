export const fadeIn = (direction, delay, show) => {
    return {
        hidden: {
            y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
            x: direction === "lefft" ? 40 : direction === "right" ? -40 : 0,
        },
        show: {
            y: 0,
            x: 0,
            Opacity: 1,
            transition: {
                type: "s",
                duration: 1.2,
                delay: "delay",
                ease: [0.25, 0.25, 0.25, 0.75]
            }
        }


    }
}

