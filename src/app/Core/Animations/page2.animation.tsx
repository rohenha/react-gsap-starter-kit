import { TimelineMax } from 'gsap';
import { IAnimation } from 'Interfaces';

export const Page2: IAnimation = {
    duration: 1,
    enter(node: any, duration: number, delay: number) {
        const tlIn = new TimelineMax();
        tlIn.delay(delay);
        tlIn.set(node, {
            autoAlpha: 0,
            opacity: 0,
            position: "fixed",
            y: 100
        });
        tlIn.to(node, duration, {
            autoAlpha: 1,
            opacity: 1,
            y: 0,
        });
        tlIn.set(node, { clearProps: "position, width" });
    },
    exit(node: any, duration: number) {
        const tlOut = new TimelineMax();
        tlOut.set(node, {
            autoAlpha: 1,
            opacity: 1,
            position: "fixed",
            y: 0
        });
        tlOut.to(node, duration, {
            autoAlpha: 0,
            opacity: 0,
            y: -100,
        });
        tlOut.set(node, { clearProps: "position, width" });
    }
}