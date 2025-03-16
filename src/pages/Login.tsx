
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import { Link } from 'react-router-dom';

const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock login check (in a real app, this would be a server validation)
      if (formData.email === 'fatimussa91@gmail.com' && formData.password === 'admin') {
        // Success message and redirect
        toast({
          title: "Login erfolgreich",
          description: "Willkommen im Admin-Bereich",
          variant: "default",
        });
        
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/admin');
      } else {
        // Login failed
        toast({
          title: "Login fehlgeschlagen",
          description: "Ungültige E-Mail oder Passwort",
          variant: "destructive",
        });
      }
    } catch (error) {
      // Error message
      toast({
        title: "Fehler",
        description: "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-rok-50">
      <div className="flex items-center p-4 absolute top-0 left-0">
        <Link to="/" className="inline-flex items-center text-rok-600 hover:text-rok-700 font-medium">
          <ArrowRight className="w-4 h-4 mr-2 transform rotate-180" />
          Zurück zur Startseite
        </Link>
      </div>
      
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 w-full max-w-md border animate-fade-up">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <Logo size="lg" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Admin Login</h1>
            <p className="text-muted-foreground">
              Melden Sie sich an, um auf den Admin-Bereich zuzugreifen
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                E-Mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="rok-input"
                placeholder="admin@rok-gebaeudemanagement.de"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Passwort
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="rok-input pr-10"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              <div className="flex justify-end mt-1">
                <a href="#" className="text-sm text-rok-600 hover:text-rok-700">
                  Passwort vergessen?
                </a>
              </div>
            </div>
            
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="rok-button-primary w-full relative group overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {loading ? 'Wird angemeldet...' : 'Anmelden'}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-rok-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </button>
            </div>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Hinweis: Für die Demo-Version, nutzen Sie:<br />
              <span className="font-medium">E-Mail: admin@rok-gebaeudemanagement.de</span><br />
              <span className="font-medium">Passwort: admin</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
