import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
width: 400px;
 
background-image: linear-gradient(to bottom, #B0E2FF, #C1FFC1);
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 15px;
img {
  width: 120px;
  margin: 10px 0 40px;
}
p {
  color: #F00;
  margin-bottom: 15px;
  border: 1px solid #F00;
  padding: 10px;
  width: 90%;
  text-align: center;
}
input {
  flex: 1;
  height: 40px;
  margin-bottom: 15px;
  padding: 0 20px;
  color: #777;
  font-size: 15px;
  width: 90%;
  border: 1px solid #ddd;
  border-radius: 6px;
  &::placeholder {
    color: #999;
  }
}
button {
  color: #fff;
  font-size: 16px;
  background: #00B2EE;
  height: 56px;
  border: 0;
  border-radius: 5px;
  width: 100%;
}
hr {
  margin: 20px 0;
  border: none;
  border-bottom: 1px solid #cdcdcd;
  width: 100%;
}
a {
  font-size: 16;
  font-weight: bold;
  color: #999;
  text-decoration: none;
}
`;