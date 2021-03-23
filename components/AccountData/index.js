import styled from 'styled-components';

const AccountDataContain = styled.div`
  padding: 5vh 5vw;
  max-width: 1000px;
  width: 100%;
`;

AccountDataContain.Bg = styled.div`
background: #fff;
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
max-height: 630px;
justify-content: space-between;

border-radius: 10px;
overflow: hidden;
box-shadow: 0 10px 20px rgb(0 0 0 / 20%);

& > div:last-child {
  width: 50%;
}

& > div:first-child {
  max-width: 50%;
  overflow: hidden;
}

& > div:last-child {
  padding: 40px;
}

.user-bg{
  background: #707070;
  border-radius: 50%;
  height: 150px;
  width: 150px;
  text-align: center;
  margin: auto;
  margin-bottom: 30px;
  position: relative;
  cursor: pointer;
  transition: all 0.1s;

  &:hover{
    .user-icon{
      opacity: .2;
    }

    .upload-photo-box{
      transform: translateY(-100%);
    }
  }

  .user-icon{
    width: 100%;
    background: #707070;
  }

  .upload-photo-contain{
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 50%;
    position: relative;
  }


  .upload-photo-box{
    &:hover{
      color: #ff731a;
    }
    transform: translateY(0);
    width: 100%;
    height: 65px;
    position: absolute;
    top: 100%;
    left: 0;
    color: #fff;
    padding-top: 10px;
    background-color: rgba(0 0 0 / 60%);
  }

  .camera-icon{
    background: #E49447;
    border-radius: 50%;
    height: 55px;
    width: 55px;
    transform: translate(-50%,-50%);
    position: absolute;
    top: 10%;
    left: 10%;
    cursor: pointer;
  }

  .fa-camera-retro{
    transform: translate(-50%,-50%);
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 1.5rem;
  }

  .fa-user{
    font-size: 4.5rem;
    color: #fff;
    transform: translate(-50%,-50%);
    position: absolute;
    top: 50%;
    left: 50%;
  }
}

@media(max-width: 767px){
  & > div:first-child {
  display: none
}
& > div:last-child {
  width: 100%;
  padding: 30px;
}
}

`;

export default AccountDataContain;
