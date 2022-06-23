<h1 align="left"><br/>원티드 클론 프로젝트</h1>
<br>
<p align='center'>
<img width='50%' src='https://www.venturesquare.net/wp-content/uploads/2022/02/%EC%9B%90%ED%8B%B0%EB%93%9C%EB%9E%A9-789x404.jpg'>
</p>
<br>

## 📌 바로가기
- 사이트 바로가기 : 
- 프론트엔드 GitHub Repository : https://github.com/itsstacy/wanted-clone
- 백엔드 GitHub Respository : https://github.com/HayeonKimm/backend-clonePro
- 시연 영상 보러가기: 

<br>

## 👨‍💻 프로젝트 기간 및 참여인원
2022.06.17.(금) ~ 2022.06.23.(목)</br>


| Name     | GitHub                             | Position  |
| -------- | ---------------------------------- | --------- |
| 조세림     |  https://github.com/selim-jo       | 백엔드 |
| 전영준     |  https://github.com/jyj9784        | 백엔드 |
| 김하연     |  https://github.com/HayeonKimm     | 백엔드 |
| 권지은     |  https://github.com/itsstacy       | 프론트 |
| 최서우     |  https://github.com/zerovodka      | 프론트 |

<br>

## 프로젝트 구조

<details markdown="1">
<summary>구현 화면</summary>

![서비스 아키텍처 (1)](https://user-images.githubusercontent.com/89131236/162146016-6a65a78e-00f8-477d-8308-3e1ab4ed75e6.png)
</details>

<details markdown="2">
<summary>API 명세서</summary>
  
[https://www.notion.so/4-e1ca3a0316e4459d80cc08793e2d1556](https://www.notion.so/acb268ccf9ab4d139f62f086b8d3e175?v=616957780f1944fbb7dfbd57061a384e])

</details>

## ⚙️ 주요 구현 기능

<details>
<summary>1. 로그인</summary>
<div markdown="1">
<br>
  
+ 사용자들의 접근성을 높이기 위해 간편한 카카오 소셜 로그인을 구현했습니다.
<img width='600px' src='https://user-images.githubusercontent.com/89131236/161420316-475aa330-b002-4e44-8770-4279c347f78f.png'>
</div>
</details>
<details>
<summary>2. 필터링 및 방만들기</summary>
<div markdown="1">
<br>
  
+ 난이도, 운동 종류에 따라 방을 개설하고, 필터링 기능을 통해 찾을 수 있습니다.
+ 영상 추천 기능을 도입해 유저가 좀 더 간편하게 방을 만들 수 있게 했습니다.

![필터링및방만들기배속2](https://user-images.githubusercontent.com/89131236/161430255-88cdeac0-35f0-4d8f-b244-9255b7e2a779.gif)

</div>
</details>
<details>
<summary>3. 비밀방 및 링크공유</summary>
<div markdown="1">
<br>
   
+ 비밀방 및 링크공유 기능을 도입해, 친구와 함께 더 잘 이용할 수 있는 환경을 제공했습니다.

![비밀방및링크공유배속](https://user-images.githubusercontent.com/89131236/161424828-456a41d4-d473-4bde-a438-a2d79c337d03.gif)

</div>
</details>
<details>
<summary>4. 화상채팅</summary>
<div markdown="1">
<br>
  
   + 사용자들간의 화상채팅을 이용할 때, 카메라 끄기, 음소기 하기, 격려하기(이모티콘) 등의 기능을 통해,
<br> 자신이 원하는 대로 사용할 수 있습니다.

![기능소개_화상채팅](https://user-images.githubusercontent.com/98517680/161428260-e7cc7154-e265-4839-8e62-dfa6217d776a.gif)
  
</div>
</details>
<details>
<summary>5. 유튜브영상 및 프로그래스바</summary>
<div markdown="1">
<br>
  
   + 사용자가 처음 방을 만들 때 지정한 영상을 보면서 다같이 운동을 할 수 있습니다.
+ 현재 영상의 진행 상황에 따라 영상 위쪽에 위치한 프로그래스바를 통해 현재 진행 상황을 시각적으로 확인할 수 있습니다.
+ 또한 시간이 맞추어 사용자들에게 동기부여가 될 수 있는 여러가지 멘트들이 보일 수 있도록 하였습니다.
+ 운동이 끝나게 되면, 운동을 완료했다는 모달이 뜨면서 운동을 마무리 할 수 있습니다.

![기능소개_영상 프로그래스바](https://user-images.githubusercontent.com/98517680/161428860-6144a30a-3817-4a1d-9064-7ad145671c82.gif)

</div>
</details>
<details>
<summary>6. 운동기록 및 마이페이지</summary>
<div markdown="1">
<br>
  
   + 사용자가 해당 서비스를 이용하며, 운동을 지속할 수 있는 장치를 마련했습니다.
+ 마이페이지에서 사용자의 닉네임 및 목표설정을 변경할 수 있습니다.
+ 운동을 완료하고 나면, 축하메시지와 함께 운동기록이 저장됩니다.
+ 메인페이지에서 운동랭킹, 이만큼 운동했어요, 캘린더출석, 이런운동을많이했어요 탭에서 반영됩니다.

![운동기록및마이페이지배속](https://user-images.githubusercontent.com/89131236/161427704-b49f420e-6cbe-42be-95f7-939dfcc56ce9.gif)
</div>
</details>
<details>
<summary>7. 반응형</summary>
<div markdown="1">
<br>
  
 + 홈트게더는 태블릿 가로형 및 PC에 최적화되어 있습니다.
 + 모바일로 접속 시에는 PC로 쉽게 이동할 수 있도록, 카카오톡 공유하기 기능을 도입했습니다.

![반응형배속](https://user-images.githubusercontent.com/89131236/161423917-e63a4981-b62b-4b46-b6cf-11e26b1b23d9.gif)
<img height='304px' src='https://user-images.githubusercontent.com/89131236/161428194-bd44b026-a24b-4154-b392-fcb6b1b3193e.png'>
</div>
</details>

<br>

## 기술스택
> #### 프론트엔드
<p align="center">
<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
<img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white">
<br>
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=Socket.io&logoColor=white">
<img src="https://img.shields.io/badge/S3-569A31?style=for-the-badge&logo=S3&logoColor=white">
<br>
<br>
<br>

> #### 백엔드
  
  <p align="center">
  <img src="https://img.shields.io/badge/Node-42443b?style=for-the-badge&logo=Node.js&logoColor=green">
  <img src="https://img.shields.io/badge/Express-7b7b7b?style=for-the-badge&logo=Express&logoColor=black">
  <img src="https://img.shields.io/badge/MongoDB-3e2d1d?style=for-the-badge&logo=MongoDB&logoColor=green">
  <br>
  <img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=Socket.io&logoColor=white">
  <img src="https://img.shields.io/badge/prettier-192932?style=for-the-badge&logo=prettier&logoColor=black">
  <img src="https://img.shields.io/badge/swagger-80b43c?style=for-the-badge&logo=swagger&logoColor=black">


<br>
