import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { JhipsterAppModule } from './app.module';

if (module['hot']) {
    module['hot'].accept();
}

platformBrowserDynamic().bootstrapModule(JhipsterAppModule)
.then((success) => console.log(`Application started`))
.catch((err) => console.error(err));
