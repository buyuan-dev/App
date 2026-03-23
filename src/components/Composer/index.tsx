import React, {useEffect, useRef} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import type {TextInputProps} from 'react-native';
import TextInput from './TextInput';
import useThemeStyles from '../../hooks/useThemeStyles';
import type ComposerProps from './types';

function Composer({
    autoFocus = false,
    ...restProps
}: ComposerProps) {
    const styles = useThemeStyles();
    const {isKeyboardVisible} = useKeyboard();
    const textInputRef = useRef<TextInput>(null);

    const textAlignVertical = Platform.select({
        android: 'center',
        default: 'auto',
    });

    return (
        <TextInput
            ref={textInputRef}
            style={[
                styles.textInput,
                {textAlignVertical},
            ]}
            autoFocus={autoFocus}
            {...restProps}
        />
    );
}

export default Composer;