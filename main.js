// アフィリエイトID
const AFFILIATE_ID = '4e1292eb.3ef35378.4e1292ec.6a7f65be';

// 楽天トラベルのアフィリエイトリンクを生成
function generateAffiliateLink(hotelUrl) {
    // URLエンコード
    const encodedUrl = encodeURIComponent(hotelUrl);
    
    // 楽天アフィリエイトのリンクフォーマット
    return `https://hb.afl.rakuten.co.jp/hgc/${AFFILIATE_ID}/?pc=${encodedUrl}`;
}

// ページ読み込み時にすべてのホテルリンクを処理
document.addEventListener('DOMContentLoaded', function() {
    // すべての「楽天トラベルで見る」ボタンを取得
    const hotelButtons = document.querySelectorAll('.hotel-card .btn');
    
    hotelButtons.forEach(button => {
        const originalHref = button.getAttribute('href');
        
        // 既にアフィリエイトリンクでない場合のみ変換
        if (originalHref && !originalHref.includes('hb.afl.rakuten.co.jp')) {
            // アフィリエイトリンクを生成
            const affiliateLink = generateAffiliateLink(originalHref);
            
            // リンクを更新
            button.setAttribute('href', affiliateLink);
            
            // 新しいタブで開く
            button.setAttribute('target', '_blank');
            button.setAttribute('rel', 'noopener noreferrer');
        }
    });
    
    // メニューボタンの動作
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});

// デバッグ用：リンクが正しく生成されているか確認
console.log('アフィリエイトID設定完了:', AFFILIATE_ID);
