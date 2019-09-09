import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: #eee;
`;

export const Form = styled.form`
    width: 400px;
    background: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 100px;
        margin: 10px 0 40px;
        animation: gira 8s linear infinite;
    }
    @keyframes gira {
        to {
            transform: rotate(360deg);
        }
    }
    span {
      color: #4caf50;
      margin-bottom: 20px;
      font-weight: 400;
      font-size: 1.1rem;
    }
    p {
        color: #ff3333;
        margin-bottom: 15px;
        padding: 10px;
        width: 100%;
        text-align: center;
    }
    input {
        flex: 1;
        height: 46px;
        margin-bottom: 15px;
        margin-left: 20px;
        margin-right: 20px;
        padding: 10px 20px;
        color: #777;
        font-size: 15px;
        width: 100%;
        border: 1px solid #ddd;
        &::placeholder {
        color: #999;
        }
    }
  button {
    color: #fff;
    font-size: 16px;
    background: #61dafb;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
    cursor: pointer;
  }
  button:hover {
    background: #18a3ca;
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