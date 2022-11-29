import { action, computed, observable, makeObservable } from 'mobx'
import { AxiosRequestHeaders } from 'axios'
import { RequestStateType } from '@components/api/types/UsersInformationMonitoring'

export interface CurrentUserTokens {
  accessToken: string,
  refreshToken: string,
  expiresIn: number,
}

export interface CurrentUserInfos {
  firstname: string,
  lastname: string,
  email: string,
  isAdmin: boolean,
  premiumState: RequestStateType,
  testFlightState: RequestStateType
}

class CurrentUserStore {
  @observable public tokens: CurrentUserTokens | null = null
  @observable public user: CurrentUserInfos | null = null

  constructor() {
    makeObservable(this)
    this.retrieveCurrentUserTokens()
  }

  @action public setTokens = (tokens: CurrentUserTokens | null) => {
    this.tokens = tokens
    if (this.tokens?.accessToken)
      this.storeCurrentUserTokens()
    else
      this.clearCurrentUserTokens()
  }

  @action public clear = () => {
    this.setTokens(null)
    this.setUser(null)
  }

  @action.bound public setUser(user: CurrentUserInfos | null) {
    this.user = user;
  }

  @computed get authenticationTokenHeaders(): AxiosRequestHeaders {
    if (!this.tokens?.accessToken?.length) return {}
    return {
      Authorization: `Bearer ${this.tokens?.accessToken}`,
    }
  }

  private storeCurrentUserTokens() {
    localStorage.setItem('currentUserTokens', JSON.stringify(this.tokens))
  }

  private clearCurrentUserTokens() {
    localStorage.removeItem('currentUserTokens')
  }


  @action public retrieveCurrentUserTokens() {
    try {
      const tokens = localStorage.getItem('currentUserTokens')

      if (tokens) this.tokens = JSON.parse(tokens)
    } catch {}
  }
}

export default new CurrentUserStore()
