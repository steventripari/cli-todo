const { Input } = require(`enquirer`);
const to = require('await-to-js').default;
const shouldCancel = require('cli-should-cancel');
const handleError = require('cli-handle-error');

module.exports = async ({ message }) => {
    const [err, response] = await to(
        new Input({
            message,
            validate(value) {
                return !value ? `Please adda value.` : true;
            }
        })
            .on(`Cancel`, () => shouldCancel())
            .run()
    );

    handleError(`INPUT: `, err);
    return response;
};
