
 🥗 9조 FOOD RECIPE
------------------
 다양한 음식과 맛을 구현하고 싶을 때, 나만의 레시피를 세상에 공개하고 싶을 때,
 <br/>
 재료는 있지만 같은 맛이 질릴 때 이용해 볼 수 있는 사이트.
 
 <br/>
 
  1. 팀원들 소개 😁😁
------------------

  - FE : 이현석, 박수봉
  - BE : 인기천, 차지훈, 진용희

BE 깃허브 주소
https://github.com/souliat

<br/>

  2. 사용 기술 📙📙
------------------
 - FE : React
 - BE : Spring

  3. 와이어 그램 📋📋
------------------
![image](https://user-images.githubusercontent.com/105143449/174040649-4c5b12c4-9f7c-4fec-bf52-ef64b16d107e.png)
![image](https://user-images.githubusercontent.com/105143449/174040755-81e27598-bee3-4757-a8c6-b6d84c7739f3.png)
![image](https://user-images.githubusercontent.com/105143449/174040777-7a71d740-040c-41e4-a2e6-d98793b55691.png)
![image](https://user-images.githubusercontent.com/105143449/174040796-c5fc5cad-e9c1-41fc-9490-2a421191612e.png)
![image](https://user-images.githubusercontent.com/105143449/174040851-d4046789-38ff-4a70-bb70-b184e90ed0c4.png)

<br/>

  4. 트러블 슈팅 😮‍💨😮‍💨
 ------------------
 <br/>
 1. (BE <-> FE)로그인/회원가입: spring security form을 disable()하여 프론트에 값을 넘겨주기 위해 cors filter사용, 그렇지만 세션이 여전히
  넘어가지 않음.
  <br/>  
=> 여러가지 시도를 해보고 구글링을 해보니 양쪽에서 credential을 true를 맞추어주어야 했고 { 'Content-Type': 'application/json', 
  withCredentials: true } 를 axios에 넣어주어야 했다.
  <br/>  
=> cors의 경우는 CorsConfigurationconfig 클래스를 만들어 여기에서 허용값들을 지정해주거나 securityconfig클래스에서 cors를 지정해줄 수 도
  있었다. 또한 프론트쪽에서 프록시 설정을 하는 방법도 이용이 가능헀다.
  <br/>
2. (BE) spring security 로그인시 아이디값에 이메일값이 저장되는 문제
  <br/>
=> dto와 service에 변경된 이름 통일
  <br/>
3. (BE) 서버에서 특정 어노테이션을 사용하여 로그인한 사용자의 정보를 가져오지 못함 
  <br/>
=> Authentication 객체 생성으로 가져옴
  <br/>
4. (FE, BE) API 호출 시 PUT / DELETE method 사용 불가 
  <br/>
=> credential true추가로 해결
  <br/>
5. (FE) 토큰값의 유무로 메인페이지에 로그인 버튼과 로그아웃 버튼이 같이 나오지 않게 Header.js에서 값을 설정해주었지만 다른페이지로 이동
  하면 기능하지 않음
  <br/>
=> 다른 페이지로 이동하면 설정 값이 리셋이 되는것을 발견하고 App.js에서 한번 더 값 설정을 해주어 다른페이지 이동을 하더라도 기능할 수 있도록 조치.

