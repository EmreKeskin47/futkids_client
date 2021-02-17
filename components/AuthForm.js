import React from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { Form, Field } from "react-final-form";
import Colors from "../constants/Colors";

const AuthForm = (props) => {
    //----------------------
    // Validations
    const required = (value) => !value && "Lütfen boş bırakmayınız";

    const checkQuestionValue = (value) =>
        isNaN(value)
            ? "Girilen değer numara olmalı"
            : value == 3
            ? undefined
            : "Sonuç hatalı";

    // Custom Components
    const CustomTextInput = ({ placeholder, input, meta, label }) => (
        <View style={styles.container}>
            {label && <Text style={styles.labelTitle}>{label}</Text>}
            <TextInput
                style={styles.textInput}
                {...input}
                placeholder={placeholder}
            />
            {meta.error && meta.touched && (
                <Text style={styles.errorTitle}>{meta.error}</Text>
            )}
        </View>
    );

    const Button = ({ handleSubmit }) => (
        <TouchableOpacity
            style={[styles.button, styles.container]}
            onPress={handleSubmit}
        >
            <Text style={styles.buttonTitle}>Giriş</Text>
        </TouchableOpacity>
    );

    const CustomField = ({ name, placeholder, label, validate }) => {
        return (
            <Field
                {...{ name, validate }}
                render={({ input, meta }) => (
                    <>
                        <CustomTextInput
                            {...{ input, meta, label, placeholder }}
                        />
                    </>
                )}
            />
        );
    };

    const initialValues = { email: "", password: "", securityQuestion: "" };
    return (
        <SafeAreaView style={styles.safeArea}>
            <Form
                initialValues={initialValues}
                onSubmit={(values) => alert(JSON.stringify(values))}
                render={({ handleSubmit }) => {
                    return (
                        <>
                            <CustomField
                                name="email"
                                validate={required}
                                placeholder="Eposta Giriniz"
                                label="Eposta"
                            />
                            <CustomField
                                name="password"
                                validate={required}
                                placeholder="Şifre Giriniz"
                                label="Şifre"
                            />
                            <CustomField
                                name="password"
                                validate={required}
                                placeholder="Tekrar Sifrenizi Girin"
                                label="Şifre Tekrar"
                            />
                            <CustomField
                                name="securityQuestion"
                                validate={(required, checkQuestionValue)}
                                placeholder="İşlemi yapınız"
                                label="Yasiniz"
                            />
                            <Button {...{ handleSubmit }} />
                        </>
                    );
                }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        justifyContent: "center",
    },
    container: {
        margin: 12,
    },
    textInput: {
        borderBottomColor: "#787878",
        backgroundColor: "#f4f4f4",
        padding: 16,
        borderRadius: 8,
        color: "gray",
        fontFamily: "Avenir-Medium",
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary,
        padding: 12,
        borderRadius: 8,
    },
    buttonTitle: {
        fontSize: 18,
        color: "white",
        fontFamily: "Avenir-Medium",
    },
    errorTitle: {
        fontSize: 13,
        color: "red",
        fontFamily: "Avenir-Medium",
        marginTop: 8,
    },
    labelTitle: {
        marginBottom: 8,
        fontSize: 16,
        fontFamily: "Avenir-Medium",
    },
});
export default AuthForm;
