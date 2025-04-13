import Navigo from "navigo";
import { header } from "../components/header";
import { footer } from "../components/footer";

const router = new Navigo('/', {linksSelector: 'a[href^="/"]'});

export const initRouter = () => {
    router
      .on('/', () => {
        document.body.append(
            header(),
            footer()
            );
        console.log('home');

      })
      .on('/favourite', () => {
        console.log('favourite');
      })
      .notFound(() => {
        console.log('ERROR 404');
      })

      router.resolve();
    
}