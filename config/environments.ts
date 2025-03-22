interface EnvConfig {
    url: string;
}

const getEnvConfig = (): EnvConfig => {
    // Get env and brand from process.env as set by package.json scripts
    const env = (process.env.ENV || 'qa').toLowerCase();
    const brand = (process.env.BRAND || 'brand1').toLowerCase();

    // Define URLs based on environment and brand
    const urls = {
        dev: {
            brand1: 'https://abc.def.dev.io',
            brand2: 'https://abc.ghf.dev.io'
        },
        qa: {
            brand1: 'https://www.google.com',
            brand2: 'https://abc.ghf.qa.io'
        },
        staging: {
            brand1: 'https://abc.def.staging.io',
            brand2: 'https://abc.ghf.staging.io/'
        }
    };

    // Get the URL based on env and brand, with fallbacks
    const envUrls = urls[env] || urls.qa; // Default to QA if env not found
    const url = envUrls[brand] || envUrls.brand1; // Default to brand1 if brand not found

    return { url };
};

export default getEnvConfig;