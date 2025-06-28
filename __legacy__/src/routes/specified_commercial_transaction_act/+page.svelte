<script lang="ts">
  import { site } from '$lib/config';

</script>

<svelte:head>
  <title>くぼっち - 特定商取引法に基づく表示</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>
<article class="prose">
  <header>
    <h1>特定商取引法に基づく表示</h1>
  </header>
  <main>
    <section>
      <h2>事業者の名称</h2>
      <p>kubocchi.com</p>
    </section>
    <section>
      <h2>代表者の氏名</h2>
      <p>{site.name}</p>
    </section>
    <section>
      <h2>所在地</h2>
      <p>〒{site.postcode} {site.address}</p>
    </section>
    <section>
      <h2>お問い合わせ先</h2>
      <p>メールアドレス: {site.email}</p>
      <p>電話番号: {site.phone}</p>
      <p>※お問い合わせはメールでお願いいたします。</p>
    </section>
    <section>
      <h2>販売価格</h2>
      <p>各商品の販売価格は、該当ページに表示されています。</p>
    </section>
    <section>
      <h2>商品代金以外の必要料金</h2>
      <p>消費税、振込手数料、送料（必要な場合）は、お客様のご負担となります。</p>
    </section>
    <section>
      <h2>返品・キャンセルについて</h2>
      <p>商品の特性上、購入後の返品・キャンセルはお受けしておりません。ただし、商品に欠陥がある場合は、商品到着後7日以内にご連絡いただければ対応いたします。</p>
    </section>
    <section>
      <h2>引き渡し時期</h2>
      <p>ご注文確定後、7営業日以内に商品を発送いたします。</p>
    </section>
    <section>
      <h2>お支払い方法</h2>
      <p>クレジットカード、銀行振込がご利用いただけます。</p>
    </section>
    <section>
      <h2>お支払い時期</h2>
      <p>クレジットカード：ご注文時にお支払いが確定します。<br>銀行振込：ご注文後7日以内にお支払いください。7日以内にお支払いが確認できない場合は、自動的にキャンセルとなります。</p>
    </section>
    <section>
      <h2>動作環境</h2>
      <p>各サービスの動作環境は、該当ページに記載されています。</p>
    </section>
    <section>
      <h2>免責事項</h2>
      <p>当サイトの利用により発生したいかなる損害についても、一切の責任を負いません。ただし、法令上の請求原因が認められる場合を除きます。</p>
    </section>
  </main>
  <footer>
      <p>&copy; 2024 kubocchi.com</p>
  </footer>
</article>