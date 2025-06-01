
import { useState } from "react";
import { toast } from "sonner";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be the actual form submission to a server
    toast.success("Сообщение отправлено", {
      description: "Мы ответим вам в ближайшее время.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold mb-8">Контакты</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <div className="bg-muted/30 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Наши контакты</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">support@keyarena.com</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Телефон</p>
                <p className="font-medium">+7 (999) 123-45-67</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Адрес</p>
                <p className="font-medium">г. Челябинск, ул. 250-летия Челябинска, д. 50</p>
              </div>
            </div>
          </div>
          
          <div className="bg-muted/30 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Часто задаваемые вопросы</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Как происходит доставка ключа?</h3>
                <p className="text-sm text-muted-foreground">
                  После оплаты ключ будет отправлен на указанный вами email адрес. 
                  Также вы сможете найти его в личном кабинете в разделе "Мои покупки".
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Что делать, если ключ не работает?</h3>
                <p className="text-sm text-muted-foreground">
                  В маловероятном случае, если ключ не работает, обратитесь в службу 
                  поддержки. Мы решим проблему в кратчайшие сроки.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Какие платежные методы вы принимаете?</h3>
                <p className="text-sm text-muted-foreground">
                  Мы принимаем банковские карты, электронные кошельки, 
                  криптовалюту и другие популярные способы оплаты.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div>
          <div className="bg-muted/30 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Свяжитесь с нами</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 rounded-md bg-background border border-border"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 rounded-md bg-background border border-border"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Тема
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-2 rounded-md bg-background border border-border"
                >
                  <option value="">Выберите тему</option>
                  <option value="support">Техническая поддержка</option>
                  <option value="order">Вопрос о заказе</option>
                  <option value="refund">Возврат</option>
                  <option value="other">Другое</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full p-2 rounded-md bg-background border border-border resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="game-button-primary w-full px-6 py-3"
              >
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
