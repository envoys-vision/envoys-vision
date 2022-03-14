import styled from "styled-components"; 

export const InputD = styled.input`
    margin: 10px 0;
    padding: 15px 0;
    width: 450px;
    text-align: center;
    outline: none; 
    border: none;
    border-radius: 5px;
    background: #fff;
    border: 1px solid #ccc;
    font-size: 18px;

    ::placeholder{
        font-family: 'Exo 2';
        font-size: 18px;
    }
    /* :hover{
        box
    } */
`

export const FromD = styled.form`
    display: flex;
    flex-direction: column;
`

export const TextD = styled(InputD)`
    padding: 10px 20px;
    outline: none;
    height: 350px;
`

export const TextAreaD = styled.textarea`
    margin: 10px 0;
    padding: 15px;
    text-align: start;
    outline: none; 
    border: none;
    border-radius: 5px;
    background: #fff;
    border: 1px solid #ccc;
    font-size: 18px;
    resize: none;
    ::placeholder{
        font-family: 'Exo 2';
        font-size: 18px;
        text-align: center;
    }
` 