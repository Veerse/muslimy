import React from 'react';
import { useDispatch } from 'react-redux'
import {
    Box,
    Button,

    Form,
    FormField,
    MaskedInput,
    TextInput,
} from 'grommet';
import { login } from '../features/user/UserSlice';

const defaultValue = {
    email: '',
    password: ''
}

export const HowItWorks = () => {
    const [value, setValue] = React.useState(defaultValue);
    const dispatch = useDispatch()

    return (
        <section>
            <h1>How it works</h1>
            <h1>How it works</h1>
            <h1>How it works</h1>
            <h2>How it works</h2>
            <h2>How it works</h2>
            <h2>How it works</h2>
            <h2>How it works</h2>
            <h3>How it works</h3>
            <h3>How it works</h3>
            <h3>How it works</h3>
            <Box align="center">

                <Form
                    value={value}
                    onChange={nextValue => { setValue(nextValue); }}
                    onSubmit={event => { dispatch(login(event.value)) }}
                >
                    <FormField label="Email" name="email">
                        <MaskedInput
                            name="email"
                            mask={[
                                { regexp: /^[\w\-_.]+$/, placeholder: 'example' },
                                { fixed: '@' },
                                { regexp: /^[\w]+$/, placeholder: 'my' },
                                { fixed: '.' },
                                { regexp: /^[\w]+$/, placeholder: 'com' },
                            ]}
                        />
                    </FormField>
                    <FormField label="Password" name="password">
                        <TextInput name="password" />
                    </FormField>
                    <Box margin={{ top: 'large' }}>
                        <Button type="submit" label="Connexion" primary />
                    </Box>
                </Form>
            </Box>

        </section>
    )
}