/*
 *
 * 📦 [Module] NuxtModuleMatomo
 *
 */

 // ///////////////////////////////////////////////////////////////////// Imports
 // -----------------------------------------------------------------------------
 // ///////////////////////////////////////////////////////////////////// General
 import Path from 'path'
 import Fs from 'fs'

 // ///////////////////////////////////////////////////////////////////// Plugins
 const plugins = [
   {
     src: Path.resolve(__dirname, 'plugin.js'),
     filename: 'nuxt-module-matomo/index.js'
   }
 ]

// ///////////////////////////////////////////////////////////// registerPlugins
 const registerPlugins = (instance, next) => {
   return new Promise((next) => {
     plugins.forEach((plugin) => {
       instance.addPlugin(plugin)
     })
     if (next) { return next() }
   })
 }

// ///////////////////////////////////////////////////////////////////// Liftoff
// -----------------------------------------------------------------------------
 export default async function () {
   if (this.options.matomo.include) {
     await registerPlugins(this, () => {
        console.log(`📦 [Module] Matomo`)
     })
   }
 }
