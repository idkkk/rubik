package org.rubik.api.domain;

import com.fasterxml.jackson.annotation.JsonInclude;
import org.springframework.data.domain.Page;

/**
 * @author xiajinxin
 * @since 2016-06-22
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ProductResponse extends BaseResponse {
    private Page<Product> result;

    public Page<Product> getResult() {
        return result;
    }

    public void setResult(Page<Product> result) {
        this.result = result;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;

        ProductResponse that = (ProductResponse) o;

        return getResult() != null ? getResult().equals(that.getResult()) : that.getResult() == null;

    }

    @Override
    public int hashCode() {
        int result1 = super.hashCode();
        result1 = 31 * result1 + (getResult() != null ? getResult().hashCode() : 0);
        return result1;
    }
}
