import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../components/Header";
import useMediaQuery from "@mui/material/useMediaQuery";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

const phoneRegExp = /^[0-9]{10}$/; /* /^[0-9]+$/ new RegExp("^\\+ [0-9]*$"); */

const userSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("email is not valid").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone Number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:800px)");

  const handleFormSubmit = ( values ) => {
    console.log(values);
  };

  return (
    <Box m="10px 20px 10px 270px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />
      <Formik
        onSubmit={handleFormSubmit}
        validationSchema={userSchema}
        initialValues={initialValues}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": {
                  gridColumn: isNonMobile ? undefined : "span 4",
                },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                value={values.firstName}
                name="firstName"
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                value={values.lastName}
                name="lastName"
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{
                  gridColumn: "span 2",
                }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="email"
                label="Email"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{
                  gridColumn: "span 4",
                }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                value={values.contact}
                name="contact"
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{
                  gridColumn: "span 4",
                }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 1"
                value={values.address1}
                name="address1"
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{
                  gridColumn: "span 4",
                }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 2"
                value={values.address2}
                name="address2"
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{
                  gridColumn: "span 4",
                }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="15px">
              <Button type="submit" color="secondary" variant="contained">
                CREATE NEW USER
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
