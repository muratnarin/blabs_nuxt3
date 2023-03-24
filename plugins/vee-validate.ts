import { defineRule, configure } from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';

export default defineNuxtPlugin?.(() => {
    defineRule('required', required );
    defineRule('email', email );
    defineRule('min', min );
    configure({
        generateMessage: (ctx) => {
            const messages = {
                required: `The ${ctx.field} field is required`,
                email: `The ${ctx.field} field must be a valid email`,
                min: `The ${ctx.field} field must be at least {length} characters`,
            };
            // @ts-ignore
            return messages[ctx.rule.name] ? messages[ctx.rule.name] : '';
        }
    })
})