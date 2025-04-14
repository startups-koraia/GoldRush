// 푸터 컴포넌트 생성 및 삽입 함수
function createFooter() {
    const footerHTML = `
        <footer class="footer">
            <div class="footer-container">
                <div class="footer-section">
                    <h3>AI 골드 러쉬 파트너스</h3>
                    <p>한국인공지능협회와 피앤에프글로벌이 함께하는<br>AI 기술 발전과 투자 지원 프로그램</p>
                </div>
                <div class="footer-section">
                    <h3>주요 링크</h3>
                    <ul class="footer-links">
                        <li><a href="index.html">홈</a></li>
                        <li><a href="about.html">프로그램 소개</a></li>
                        <li><a href="investment-structure.html">투자 구조</a></li>
                        <li><a href="partners.html">파트너십</a></li>
                        <li><a href="investment-criteria.html">투자 기준</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>리소스</h3>
                    <ul class="footer-links">
                        <li><a href="success-stories.html">성공 사례</a></li>
                        <li><a href="apply.html">신청하기</a></li>
                        <li><a href="member.html">회원사 전용</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>연락처</h3>
                    <ul class="footer-links">
                        <li>서울특별시 강남구 테헤란로</li>
                        <li>이메일: contact@aigoldrush.kr</li>
                        <li>전화: 02-123-4567</li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; ${new Date().getFullYear()} AI 골드 러쉬 파트너스. 모든 권리 보유.</p>
            </div>
        </footer>
    `;
    
    // 푸터를 body의 마지막 자식으로 삽입
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// DOMContentLoaded 이벤트 시 푸터 생성
document.addEventListener('DOMContentLoaded', createFooter);