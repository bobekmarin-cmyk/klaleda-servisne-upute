import { useState } from 'react'
import { publicUrl } from '../utils/publicUrl'

const DEMO_USER = 'user'
const DEMO_PASS = 'user123'

export function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    if (username.trim() === DEMO_USER && password === DEMO_PASS) {
      sessionStorage.setItem('klaleda_authed', '1')
      onLogin()
      return
    }
    setError('Neispravno korisničko ime ili lozinka.')
  }

  return (
    <div className="login-page">
      <div className="login-page__card">
        <div className="login-page__brand">
          <img
            className="login-page__logo"
            src={publicUrl('/images/neuruppin-logo.png')}
            alt="Neuruppin"
            width={280}
            height={80}
            decoding="async"
          />
          <h1 className="login-page__title">Servisne upute</h1>
          <p className="login-page__subtitle">Vatrogasni aparati · KLALEDA</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <label className="login-form__field">
            <span className="login-form__label">Korisničko ime</span>
            <input
              className="login-form__input"
              type="text"
              name="username"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label className="login-form__field">
            <span className="login-form__label">Lozinka</span>
            <input
              className="login-form__input"
              type="password"
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {error ? (
            <p className="login-form__error" role="alert">
              {error}
            </p>
          ) : null}
          <button type="submit" className="login-form__submit">
            Prijava
          </button>
        </form>
        <p className="login-page__hint">Demo: korisnik <strong>user</strong>, lozinka <strong>user123</strong></p>
      </div>
    </div>
  )
}
