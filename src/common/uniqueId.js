
export default function generateUniqueId(){

        const timestamp = Date.now();
        const randomNumber = Math.random();
        const hexadeciamlString = randomNumber.toString(16);
        return `id${timestamp}-${hexadeciamlString}`;
}
