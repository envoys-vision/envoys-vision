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


export const AddNewsInput = styled.textarea`
    max-width: 470px;
    font-family: 'Exo 2';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 22px;
    color: #7B797A;
    border: none;
    border-bottom: solid 1px #E9E8E8;
    resize: none;
    outline: none;
    margin: 30px 0;
    transition: .3s;
    ::placeholder{
        font-family: 'Exo 2';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #7B797A;
    }
    :focus{
        border-bottom: solid 4px #045599;
        max-width: 600px;
    }
` 


export const AddNewsInputDate = styled.input`
    font-family: 'Exo 2';
    max-width: 470px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #1D1D1D;
    border: none;
    border-bottom: solid 1px #E9E8E8;
    resize: none;
    outline: none;
    margin: 30px 0;
    ::placeholder{
        font-family: 'Exo 2';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #7B797A;
    }
`

export const AddNewsImg = styled.img`
    flex: 1;
`