// /* eslint-disable indent */
// import rollbar from 'vue-rollbar'
// export default ({ app, router, store, Vue }) => {
//     Vue.use(rollbar, {
//         accessToken: '67458f70779b43dc9687c3329139b63a',
//         captureUncaught: true,
//         captureUnhandledRejections: true,
//         enabled: true,
//         source_map_enabled: true,
//         environment: 'production',
//         payload: {
//             client: {
//                 javascript: {
//                     code_version: '1.0'
//                 }
//             }
//         }
//     })

//     Vue.config.errorHandler = (err, vm, info) => {
//         Vue.rollbar.error(err)
//         throw err
//     }
// }
