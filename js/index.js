import { Router } from "../js/router.js"

const router = new Router()

router.add("/", "/pages/home.html")
router.add("/home", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")
router.add(404, "/pages/404.html")

router.handle()

window.route = () => router.route()
window.onpopstate = () => router.handle()

console.log(window.location)
