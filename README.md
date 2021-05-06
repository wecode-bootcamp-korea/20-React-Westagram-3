# westagram!

React로 만든 인스타그램 클론 코딩 프로젝트

## :desktop_computer: 프로젝트

**로그인이미지**
![](https://images.velog.io/images/celline1637/post/6bebc893-e9d5-456d-bc36-43b2fb234062/%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B5.gif)

**메인페이지**
주제: React를 사용한 Instagram clone

- git을 사용한 첫 번째 협업 : CRA를 사용한 초기 세팅, branch 생성 후 버전 관리
- 5명의 팀원들이 공동 component, scss 사용 및 관리
- react를 사용하여 재사용 가능한 component로 페이지 재구성
- 각자 만든 페이지를 router를 사용하여 spa를 구현함
- Sass의 nesting기능을 활용하여 팀원간의 스타일 충돌을 막음
- Sass를 적극 활용하여 변수 및 Mixin과 같은 기능 사용
- 벡앤드와의 협업 전, mock data를 통해 미리 ui를 구현해봄
- 벡앤드와 협업 : 로그인 API를 만들고, 회원가입 및 로그인 기능을 구현

## :date: 프로젝트 기간

2021.04.27 - 2021.05.06

## :male-technologist: 작업 현황

https://github.com/wecode-bootcamp-korea/20-React-Westagram-3

- 로그인 페이지 레이아웃
- id, pw 입력 시 로그인 버튼 활성화 기능
- 메인 페이지 레이아웃
- 댓글 내용 입력 후 Enter press, 혹은 게시 버튼 클릭 시 댓글 추가 기능
- 문자 입력 시 게시 버튼 활성화 기능

#### :wrench: 기술 스택

HTML,CSS
JavaScript(ES6+)
React
SCSS

#### :pencil2: 작업 순서 (git)

1. git init : git init을 사용한 파일 위치와 시점부터 파일에 대한 정보들을 기억하게 만드는 명렁어
   (git init을 하게 되면 숨겨진 파일로 .git이 생성되는데 이것은 git init이후 commit할 때마다 파일의 갱신되는 내역을 저장하는 공간이다.)
   (rm -rf .git을 하게 되면 git init상태가 해제된다. 즉, git을 사용하지 않게 된다.)
2. git init을 시작한 디렉토리의 다양한 변화(폴더와 파일 생성, 파일 내부 수정 등 git init이 동작하는 내부의 모든 변화를 기록한다.)
3. git add . : git add는 git이 다음 버전을 업데이트하기 이전에(commit) 디렉토리 상의 변경 내용을 저장하는 명령어이다.
   (git reset HEAD [file]명령어는 특정 파일 git add를 취소할 수 있다. - 전체는 git reset)
4. git commit : 현재 디렉토리에 적용되어 있는 변경사항들을 내 로컬에 저장할 수 있는 명령어
   (git commit을 진행하면 언제든지 commit한 시점의 상태로 되돌아갈 수 있다.)

---

- git status : 마지막 commit시점을 기준으로 수정된 파일들과 새롭게 만들어진 파일을 볼 수 있다.
- git log : commit한 내역들을 볼 수 있다.

---

5-0 : git remote add origin [주소] : 처음 내 로컬과 Remote상의 연결(github)하려 할 때 입력하는 명령어 (한번만 연결해주면 다음에는 생략한다.) 5. git push origin master(main) : 내 로컬의 파일들을 github에 업로드하는 명령어

---

#### :balloon: 보통 여기까지 초기세팅에 대한 설정값들을 업로드한 후 프로젝트 팀원들이 있다면 github에 업로드된 파일들을 받아 분산작업을 한다.

:male-technologist::skin-tone-2: 프로젝트 팀원

1. git clone [주소] : 주소에 해당되는 파일들을 전부 그대로 복사해서 내 로컬에 다운받는 명령어
   (git clone을 하게 되면 이미 해당 파일은 .git을 가지고있기 때문에 git init을 할 필요가 없다.)
2. git branch [파일 이름] : branch는 master에 영향을 주지 않음과 동시에 master에 있는 정보들을 그대로 가져와서 작업할 수 있게 하는 명령어
3. 다양한 변화
4. 위의 순서와 동일하게 git add, git commit, git push가 이루어진다.

- branch상태에 push를 하게 되면 master와 병행으로 branch라는 공간이 별도로 생성된다.

5. master와 변경된 branch와 합칠 수 있는 pull request와 merge가 있다.(in github)
6. merge를 승인하면 내가 push한 branch가 무의 상태였던 master와 병합해 master에 내 branch의 내용이 적용된다.
7. github의 master와 내 local에 있는 master와 차이가 생기므로 git checkout을 사용해 master로 넘어간 다음, git pull을하면 변경된 사항들만 내 local master에 적용된다.

---

- git merge [branch명] : 현재 branch에서 명령한 branch의 내용들을 병합시키는 명령어
  (팀 프로젝트에 오류가 날 수 있는 요소 중 하나이다.)
- echo [파일명] > [파일명.[확장자명] : 터미널에서 간단하게 만들 수 있는 파일
  (ex : echo hello > hello.md로 하면 hello내용이 입력되어 있는 hello라는 md파일을 생성할 수 있다.)
- vi [파일 명] : 파일명에 해당되는 파일의 내용을 수정할 수 있다.

#### :closed_book: 팀원별 프로젝트 후기

김수연 https://velog.io/@syeon02
노선경 https://velog.io/@celline1637
송가람 https://velog.io/@sgr2134
윤세용 https://velog.io/@archedemus
최원근 https://velog.io/@dbk03053
