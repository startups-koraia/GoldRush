// 헤더 컴포넌트 생성 및 삽입 함수
function createHeader() {
    const headerHTML = `
        <header class="header" id="header">
            <div class="header-container">
                <div class="logo">
                    <a href="index.html">AI 골드 러쉬 파트너스</a>
                </div>
                <nav>
                    <ul class="nav-links" id="navLinks">
                        <li><a href="index.html">홈</a></li>
                        <li><a href="about.html">프로그램 소개</a></li>
                        <li><a href="investment-structure.html">투자 구조</a></li>
                        <li><a href="partners.html">파트너십</a></li>
                        <li><a href="investment-criteria.html">투자 기준</a></li>
                        <li><a href="success-stories.html">성공 사례</a></li>
                        <li><a href="apply.html">신청하기</a></li>
                        <li><a href="member.html">회원사 전용</a></li>
                    </ul>
                    <div class="hamburger" id="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </div>
        </header>
    `;
    
    // 헤더를 body의 첫 번째 자식으로 삽입
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    
    // 햄버거 메뉴 이벤트 리스너 설정
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
    // 스크롤 이벤트로 헤더 스타일 변경
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // 현재 페이지 메뉴 강조 표시
    highlightCurrentPage();
}

// 현재 페이지에 해당하는 메뉴 항목 강조 함수
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        
        // 현재 페이지와 링크의 href가 일치하면 active 클래스 추가
        if (currentPage === linkHref || 
            (currentPage === '' && linkHref === 'index.html')) {
            link.parentElement.classList.add('active');
        }
    });
}

// DOMContentLoaded 이벤트 시 헤더 생성
document.addEventListener('DOMContentLoaded', createHeader);