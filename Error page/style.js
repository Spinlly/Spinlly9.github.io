window.onload = () => {
    let tl = gsap.timeline();

    tl.from(".logo", {
        delay: 1,
        duration: 1,
        y: 30,
        opacity: 0,
        ease: "power4.out",
    })

    .from(".list",{
        duration: 1,
        y: 30,
        opacity: 0,
        ease: "power4.out",
        stagger: 0.1
    },)

    .from(".left",{
        duration: 1,
        x: -50,
        opacity: 0,
        ease: "power4.out",
        stagger: 0.1
    }, 1.5)

    .from(".hero-char",{
        duration: 1,
        y: 100,
        opacity: 0,
        ease: "power4.out",
        stagger: 0.1
    }, 1.5)
} 