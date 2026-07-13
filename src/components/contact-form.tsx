"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { type FormEvent, useState } from "react";

const coconalaUrl = "https://coconala.com/users/6178773";

export function ContactForm() {
  const [prepared, setPrepared] = useState(false);

  function prepareInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPrepared(true);
  }

  return (
    <form className="inquiry-form" onSubmit={prepareInquiry}>
      <div className="field-row">
        <label>
          <span>お名前</span>
          <input name="name" autoComplete="name" required placeholder="山田 太郎" />
        </label>
        <label>
          <span>メールアドレス</span>
          <input name="email" type="email" autoComplete="email" required placeholder="hello@example.com" />
        </label>
      </div>
      <label>
        <span>ご相談内容</span>
        <textarea name="message" required rows={6} placeholder="ご相談の背景や実現したいことを、分かる範囲でお書きください。" />
      </label>
      <div className="form-actions">
        <button type="submit">入力内容を確認する</button>
        <p>平日9:00〜18:00は、原則1時間以内に返信します。</p>
      </div>
      {prepared && (
        <div className="form-ready" role="status">
          <Check aria-hidden="true" />
          <div>
            <strong>入力ありがとうございます。</strong>
            <p>現在はポートフォリオ公開準備中のため、送信はココナラから承ります。</p>
          </div>
          <a href={coconalaUrl} target="_blank" rel="noreferrer">
            ココナラで相談する <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      )}
    </form>
  );
}

