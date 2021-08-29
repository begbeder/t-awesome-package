import packageJSON from '../package.json';

const helloWorld = (version = packageJSON.version) => {
    console.log(`this is awesome package with version: ${version}`);
};

export default helloWorld;