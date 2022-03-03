/*
 *
 * 🔌 [Plugin | NuxtModuleMatomo] Methods
 *
 */

console.log(`🔌 [Plugin | Matomo] Matomo`)

// ///////////////////////////////////////////////////////////////////// Imports
// -----------------------------------------------------------------------------
import Config from '@/nuxt.config'

// ////////////////////////////////////////////////////////////////////// Export
// -----------------------------------------------------------------------------
export default ({ app }) => {
  const MATOMO_URL = Config.matomo.src

  app.router.afterEach((to, from) => {

    if (typeof document !== 'undefined') {
      let script = document.getElementById('matomo_injected_script')
      // if matomo script does not already exist,
      // create it and intialize tracking
      if (!script) {
        script = document.createElement('script')
        script.setAttribute('id', 'matomo_injected_script')

        script.innerHTML = `
          var _mtm = window._mtm = window._mtm || [];
          _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
          var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
          g.async=true; g.src='${MATOMO_URL}'; s.parentNode.insertBefore(g,s);
        `
        document.head.appendChild(script)

      } else {
        // if script does exist,
        // push page view event on router change
        _mtm.push({'event': 'mtm.PageView'});
      }
    }
  })
}
