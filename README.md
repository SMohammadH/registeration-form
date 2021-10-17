<div dir='rtl'>
  
#  فرم ری اکت
 این فرم دو مرحله ای است. در مرحله اول استان و شهر، در مرحله دوم نام و شماره تلفن فرد دریافت میشود. اطلاعات دریافت شده در قسمت پایین فرم بصورت یک جدول نمایش داده میشود و در انتها کلید ارسال وجود دارد. با فشار دادن کلید ارسال، اطالاعات وارد شده بصورت JSON برای API  مورد نظر ارسال میشود.
  
## نحوه ایجاد تغییرات در پروژه
 برای دریافت اطلاعات وارد شده در فرم کافی است به فایل .env  در شاخه root  مراجعه کرده و لینک خود را مقابل REACT_APP_POST_SERVER= بنویسید.
  
برای تغییردررنگ پوسته به فایل tailwind.config.js مراجعه کرده و مقدار مورد نظر خود را جایگزین colors.indigo  کنید. برای مثال اگر رنگ سبز میخواهید فقط عبارت colors.green  را جایگزین colors.indigo  کنید.
  
برای تغییر فونت به فایل index.css  مراجعه کرده و فونت دلخواه خود را ایمپورت کنید و در همان فایل نام فونت را به font-family که از قبل نوشته شده بدهید.

  
  
## نحوه کار فرم
  در مرحله اول فرم نام استان دریافت میگردد سپس فقط لیست شهر های همان استان در فیلد شهر نمایش داده میشود.
  
با کلیک بر روی مرحله بعد فرم وارد مرحله دوم میشود.
  
در مرحله دوم نام و نام خانوادگی فرد دریافت میگردد. حداقل تعداد ورودی این فیلد 2 کاراکتر است(این مقدار قابل تغییر است).
  
در فیلد دوم شماره تلفن دریافت میگردد که ورودی فقط میتواند عدد و بصورت یازده رقمی باشد.
در صورت خالی بودن هر یک از فیلد ها کلید ارسال غیرفعال خواهد بود.

## تکنولوژی های استفاده شده در این پروژه
  پروژه با React, React-Hook-Form, React-Query, Tailwind-CSS  ساخته شده.
ساخت پروژه با ورژن 17.0.2 ری اکت انجام شده. تمامی کامپوننت ها فانکشنال هستند و خبری از کلاس کامپوننت نیست.
  
قسمت سی اس اس پروژه بطور کامل با تیلویند انجام شده ودر نتیجه سبک ترین فایل سی اس اس را خواهیم داشت.
  
فرم به کمک کتابخانه React-Hook-Form نوشته شده که سریعترین پرفورمنس را در میان کتابخانه های فعلی فونت دارد.
  
دریافت لیست شهر ها و ارسال اطلاعات فرم به API بوسیله کتابخانه React-Query  صورت گرفته. که پرفورمنس و کشینگ بهتری داشته باشیم.
  
همچنین لیست استان ها در public/provinces.json و لیست شهر ها در public/cities.json هر دو بصورت جیسان توسط react-query  فچ میشوند.

  
</div>
