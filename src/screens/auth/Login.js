import {Image, View} from 'react-native';
import {useState} from 'react';
import {Button, TextInput} from '../../components/inputs';
import {Screen} from '../../components/screens';
import {useDispatch} from 'react-redux';
import useApi from '../../components/api/Api';
import {setUserLogin} from '../../redux/slices/InitialSlice';
import AlertComponent from '../../components/screens/AlertComponent';

const Sign_in = () => {
  const dispatch = useDispatch();
  const {post, loading} = useApi();
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    username: false,
    password: false,
  });
  const updateFormValue = ({name, value}) => {
    setForm({...form, [name]: value});
    setErrors({...errors, [name]: false});
  };

  const handleSubmit = async () => {
    const newErrors = {};
    Object.keys(form).forEach(key => {
      if (!form[key].trim()) {
        newErrors[key] = true;
      } else {
        newErrors[key] = false;
      }
    });
    setErrors(newErrors);
    if (!Object.values(newErrors).some(error => error)) {
      try {
        const res = await post('login/', {
          uname: form.username,
          pwd: form.password,
        });
        if (res == 'ok') {
          AlertComponent({title: 'Login Successful', type: 'success'});
          dispatch(setUserLogin(form.username));
        } else {
          AlertComponent({
            title: res,
            type: 'danger',
          });
        }
      } catch (error) {}
    }
  };
  return (
    <Screen NoHeader>
      <View style={{justifyContent: 'space-evenly', flex: 1}}>
        <Image
          source={require('../../assets/images/logo.png')}
          resizeMode="contain"
          style={{width: 180, height: 180, alignSelf: 'center'}}
        />
        <View>
          <TextInput
            label="Username"
            name="username"
            updateFormValue={updateFormValue}
            error={errors.username}
          />
          <TextInput
            label="Password"
            name="password"
            updateFormValue={updateFormValue}
            rightIcon={true}
            error={errors.password}
          />
          <Button name="Login" onPress={handleSubmit} loading={loading} />
        </View>
      </View>
    </Screen>
  );
};

export default Sign_in;
