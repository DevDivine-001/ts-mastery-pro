// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     // output: "export",
//     images
//         : {
//         domains: ['cdn.sanity.io']
//     }

// };
// export default nextConfig;

// // /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //     output: "export"
// // };

// // export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     // output: "export", // Add this line to enable static export

//     images: {
//         domains: ['cdn.sanity.io'], // Allow images from specific domains
//     },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "standalone", // Use "standalone" for deployment, allowing dynamic pages
    images: {
        domains: ['cdn.sanity.io'], // Allow Sanity image domains
    },
};

export default nextConfig;

